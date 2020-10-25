package ru.dwhistle.tracker.backend.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.dwhistle.tracker.backend.db.beans.BugEntity;
import ru.dwhistle.tracker.backend.db.beans.UserEntity;

import java.util.List;

public interface BugRepository extends CrudRepository<BugEntity, Integer> {
    List<BugEntity> findAllByBugCreator(UserEntity bugCreator);
}
