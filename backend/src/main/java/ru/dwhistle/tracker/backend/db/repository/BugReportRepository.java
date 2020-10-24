package ru.dwhistle.tracker.backend.db.repository;

import org.springframework.data.repository.CrudRepository;
import ru.dwhistle.tracker.backend.db.beans.BugReportEntity;

public interface BugReportRepository extends CrudRepository<BugReportEntity, Integer> {
}
