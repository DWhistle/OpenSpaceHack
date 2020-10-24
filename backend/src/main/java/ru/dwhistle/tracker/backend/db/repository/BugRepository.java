package ru.dwhistle.tracker.backend.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.dwhistle.tracker.backend.db.beans.BugEntity;

public interface BugRepository extends CrudRepository<BugEntity, Integer> {
}
