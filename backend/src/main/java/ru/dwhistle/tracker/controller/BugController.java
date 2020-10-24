package ru.dwhistle.tracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.dwhistle.tracker.backend.db.beans.*;
import ru.dwhistle.tracker.backend.db.repository.BugReportRepository;
import ru.dwhistle.tracker.backend.db.repository.BugRepository;
import ru.dwhistle.tracker.backend.service.UserService;
import ru.dwhistle.tracker.backend.service.api.Bug;
import ru.dwhistle.tracker.backend.service.api.BugReport;
import ru.dwhistle.tracker.backend.service.api.ReportMessage;
import ru.dwhistle.tracker.controller.api.BugRequest;
import ru.dwhistle.tracker.controller.api.ReportMessageAddRequest;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;

@RestController("/bug")
public class BugController {

    private final BugRepository bugRepository;
    private final UserService userService;
    private final BugReportRepository bugReportRepository;
    private final int PAGE_SIZE = 20;

    @Autowired
    public BugController(UserService userService, BugRepository bugRepository, BugReportRepository bugReportRepository) {
        this.bugRepository = bugRepository;
        this.userService = userService;
        this.bugReportRepository = bugReportRepository;
    }

    @PostMapping("/report")
    public ResponseEntity<?> createBugRecord(@RequestBody @Valid BugRequest bugRequest) {
        UserEntity currentUser = userService.getCurrentUserEntity();
        BugEntity bugEntity = bugRepository.save(new BugEntity(
                0,
                bugRequest.name,
                bugRequest.os,
                bugRequest.osVersion,
                bugRequest.appVersion,
                bugRequest.stepsToReproduce,
                bugRequest.screenshotUrl,
                new Date(),
                currentUser));

        bugReportRepository.save(new BugReportEntity(
                0,
                new BigDecimal(0),
                BugStatus.OPENED,
                BugReportSource.SYSTEM,
                bugEntity,
                new ArrayList<>(),
                new ArrayList<>()));
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/report/{id}/messages")
    public ResponseEntity<List<ReportMessage>> getReportMessages(@PathVariable("id") int reportId) {
        Optional<BugReportEntity> optionalBugReportEntity = bugReportRepository.findById(reportId);
        return optionalBugReportEntity.map(bugReportEntity -> ResponseEntity.ok(bugReportEntity.getMessages().stream()
                .map(
                        me -> new ReportMessage(
                                UserService.entityUserToApi(me.getMessageCreator()),
                                me.getText(),
                                me.getCreationDate(),
                                me.getId())).collect(Collectors.toList())))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @GetMapping("/reports/{page}")
    public ResponseEntity<List<BugReport>> getAllReports(@PathVariable("page") int page) {
        Page<BugReportEntity> pagedEntities = bugReportRepository.findAll(PageRequest.of(page, PAGE_SIZE));
        return ResponseEntity.ok(pagedEntities.get().map(pe -> {
            BugEntity bugSpecification = pe.getBugSpecification();
            return new BugReport(pe.getId(), pe.getReward(), pe.getStatusEnum(), pe.getSourceEnum(),
                    new Bug(bugSpecification.getId(),
                            bugSpecification.getName(),
                            bugSpecification.getOs(),
                            bugSpecification.getOsVersion(),
                            bugSpecification.getAppVersion(),
                            bugSpecification.getStepsToReproduce(),
                            bugSpecification.getScreenshotUrl(),
                            bugSpecification.getCreationTime(),
                            UserService.entityUserToApi(bugSpecification.getBugCreator())
                    ),
                    Collections.emptyList()
            );
        }).collect(Collectors.toList()));
    }

    @PostMapping("/message/add")
    public ResponseEntity<?> addMessageToReport(@RequestBody @Valid ReportMessageAddRequest request) {
        UserEntity currentUser = userService.getCurrentUserEntity();
        Optional<BugReportEntity> bugReportEntityOptional = bugReportRepository.findById(request.reportId);
        if (bugReportEntityOptional.isPresent()) {
            BugReportEntity bugReportEntity = bugReportEntityOptional.get();
            bugReportEntity.addMessage(new MessageEntity(currentUser, request.text, new Date()));
            bugReportRepository.save(bugReportEntity);
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
