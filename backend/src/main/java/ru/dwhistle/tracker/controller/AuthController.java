package ru.dwhistle.tracker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ru.dwhistle.tracker.backend.db.repository.UserRepository;
import ru.dwhistle.tracker.backend.service.UserService;
import ru.dwhistle.tracker.backend.service.api.User;
import ru.dwhistle.tracker.controller.api.UserAuthRequest;
import ru.dwhistle.tracker.controller.api.UserRegistrationRequest;

import javax.validation.Valid;

@RestController("/auth")
@Validated
public class AuthController {
    private final UserService userService;

    @Autowired
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PutMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody @Valid UserRegistrationRequest user) {
        if (userService.createUser(user)) {
            return new ResponseEntity<>(HttpStatus.OK);
        } else
            return new ResponseEntity<>(HttpStatus.FOUND);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody @Valid UserAuthRequest user) {
        User userObj = userService.getByUsername(user.username);
        if (userObj != null) {
            return ResponseEntity.ok(userObj);
        } else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

}
