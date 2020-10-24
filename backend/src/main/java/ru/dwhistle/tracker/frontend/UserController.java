package ru.dwhistle.tracker.frontend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import ru.dwhistle.tracker.backend.db.beans.UserEntity;
import ru.dwhistle.tracker.backend.db.repository.UserRepository;
import ru.dwhistle.tracker.frontend.api.User;

@RestController("/user")
@Validated
public class UserController {
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PutMapping
    public void createUser(@RequestBody User user) {
        if (!userRepository.existsByUsername(user.username)) {
            UserEntity userEntity = new UserEntity();
            userEntity.setRole(user.roleEnum);
            userEntity.setUsername(user.username);
            userRepository.save(userEntity);
        }
    }

    @GetMapping("/{username}")
    public User getByUsername(@PathVariable("username") String username) {
        UserEntity userEntity = userRepository.getByUsername(username);
        if (userEntity == null) {
            throw new RuntimeException("User not found");
        }
        return new User(userEntity.getId(),
                userEntity.getName(),
                userEntity.getBio(),
                userEntity.getUsername(),
                userEntity.getRoleEnum());
    }
}
