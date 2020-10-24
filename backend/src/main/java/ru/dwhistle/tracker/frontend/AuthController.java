package ru.dwhistle.tracker.frontend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import ru.dwhistle.tracker.backend.db.beans.UserEntity;
import ru.dwhistle.tracker.backend.db.repository.UserRepository;
import ru.dwhistle.tracker.frontend.api.User;
import ru.dwhistle.tracker.frontend.api.UserAuth;
import ru.dwhistle.tracker.frontend.util.UserContext;

@RestController("/auth")
@Validated
public class AuthController {
    private final UserRepository userRepository;
    private final UserContext userContext;

    @Autowired
    public AuthController(UserContext userContext, UserRepository userRepository) {
        this.userContext = userContext;
        this.userRepository = userRepository;
    }

    @PutMapping("/register")
    public ResponseEntity<?> createUser(@RequestBody User user) {
        if (!userRepository.existsByUsername(user.username)) {
            UserEntity userEntity = new UserEntity();
            userEntity.setRole(user.roleEnum);
            userEntity.setUsername(user.username);
            userEntity.setBio(user.bio);
            userEntity.setName(user.name);
            userRepository.save(userEntity);
            return new ResponseEntity<>(HttpStatus.OK);
        } else
            return new ResponseEntity<>(HttpStatus.FOUND);
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody UserAuth user) {
        UserEntity userEntity = userRepository.getByUsername(user.username);
        if (userEntity != null) {
            return ResponseEntity.ok(entityToApi(userEntity));
        } else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    private User entityToApi(UserEntity userEntity) {
        return new User(userEntity.getId(),
                userEntity.getName(),
                userEntity.getBio(),
                userEntity.getUsername(),
                userEntity.getRoleEnum());
    }
}
