package ru.dwhistle.tracker.backend.db.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import ru.dwhistle.tracker.backend.db.beans.UserEntity;

@Repository
public interface UserRepository extends CrudRepository<UserEntity, Integer> {
    boolean existsByUsername(String username);

    UserEntity getByUsername(String username);
}
