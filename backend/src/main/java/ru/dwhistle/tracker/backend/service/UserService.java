package ru.dwhistle.tracker.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.dwhistle.tracker.backend.db.beans.UserEntity;
import ru.dwhistle.tracker.backend.db.repository.UserRepository;
import ru.dwhistle.tracker.backend.service.api.User;
import ru.dwhistle.tracker.controller.util.UserContext;

@Service
public class UserService {
    private final UserContext userContext;
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserContext userContext, UserRepository userRepository) {
        this.userContext = userContext;
        this.userRepository = userRepository;
    }

    public User getCurrentUser() {
        return userRepository.findById(userContext.id)
                .map(UserService::entityUserToApi)
                .orElseThrow();
    }

    public UserEntity getCurrentUserEntity() {
        return userRepository.findById(userContext.id)
                .orElseThrow();
    }

    public static User entityUserToApi(UserEntity userEntity) {
        return new User(userEntity.getId(),
                userEntity.getName(),
                userEntity.getBio(),
                userEntity.getUsername(),
                userEntity.getRoleEnum());
    }

    public User getByUsername(String userName) {
        UserEntity userEntity = userRepository.getByUsername(userName);
        if (userEntity == null){
            return null;
        }
        return entityUserToApi(userEntity);
    }

    public boolean createUser(User user) {
        if (!userRepository.existsByUsername(user.username)) {
            UserEntity userEntity = new UserEntity();
            userEntity.setRole(user.roleEnum);
            userEntity.setUsername(user.username);
            userEntity.setBio(user.bio);
            userEntity.setName(user.name);
            userRepository.save(userEntity);
            return true;
        }
        return false;
    }
}
