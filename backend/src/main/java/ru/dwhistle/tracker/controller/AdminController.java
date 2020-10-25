package ru.dwhistle.tracker.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.dwhistle.tracker.backend.db.beans.BugReportEntity;
import ru.dwhistle.tracker.backend.db.repository.BugReportRepository;
import ru.dwhistle.tracker.controller.api.RewardRequest;
import ru.dwhistle.tracker.controller.api.SetBugStatusRequest;

import java.util.Optional;

@RestController("admin")
@RequestMapping("/admin")
public class AdminController {
    private final BugReportRepository bugReportRepository;

    public AdminController(BugReportRepository bugReportRepository) {
        this.bugReportRepository = bugReportRepository;
    }

    @PostMapping("/reward")
    public ResponseEntity<?> assignReward(@RequestBody RewardRequest rewardRequest) {
        Optional<BugReportEntity> reportEntity = bugReportRepository.findById(rewardRequest.bugRequestId);
        if (reportEntity.isPresent()) {
            BugReportEntity bugReportEntity = reportEntity.get();
            bugReportEntity.setReward(rewardRequest.rewardSum);
            bugReportRepository.save(bugReportEntity);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @PostMapping("/status")
    public ResponseEntity<?> changeBugRequestStatus(@RequestBody SetBugStatusRequest setBugStatusRequest) {
        Optional<BugReportEntity> reportEntity = bugReportRepository.findById(setBugStatusRequest.requestId);
        if (reportEntity.isPresent()) {
            BugReportEntity bugReportEntity = reportEntity.get();
            bugReportEntity.setStatusEnum(setBugStatusRequest.bugStatus);
            bugReportRepository.save(bugReportEntity);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
