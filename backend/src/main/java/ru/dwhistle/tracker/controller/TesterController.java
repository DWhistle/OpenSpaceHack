package ru.dwhistle.tracker.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.dwhistle.tracker.backend.db.beans.DeviceEntity;
import ru.dwhistle.tracker.backend.db.beans.UserEntity;
import ru.dwhistle.tracker.backend.service.UserService;
import ru.dwhistle.tracker.backend.service.api.Device;
import ru.dwhistle.tracker.controller.api.DeviceAddRequest;

import java.util.List;
import java.util.stream.Collectors;

@RestController("tester")
@RequestMapping("/tester")
@CrossOrigin
public class TesterController {
    private final UserService userService;

    @Autowired
    public TesterController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public ResponseEntity<List<Device>> getUserSavedDevices() {
        UserEntity currentUserEntity = userService.getCurrentUserEntity();
        return ResponseEntity.ok(currentUserEntity.getDevices().stream()
                .map(d -> new Device(
                        d.getId(),
                        d.getName(),
                        d.getOs(),
                        d.getOsVersion(),
                        d.getEnvironment(),
                        d.getEnvironmentVersion())).collect(Collectors.toList()));
    }

    @PostMapping
    public ResponseEntity<?> addUserDevice(@RequestBody DeviceAddRequest deviceAddRequest) {
        UserEntity currentUserEntity = userService.getCurrentUserEntity();
        if (currentUserEntity != null) {
            currentUserEntity.getDevices()
                    .add(new DeviceEntity(
                            deviceAddRequest.name,
                            deviceAddRequest.os,
                            deviceAddRequest.osVersion,
                            deviceAddRequest.environment,
                            deviceAddRequest.environmentVersion));
            userService.updateUser(currentUserEntity);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
