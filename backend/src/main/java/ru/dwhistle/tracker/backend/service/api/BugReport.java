package ru.dwhistle.tracker.backend.service.api;

import ru.dwhistle.tracker.backend.db.beans.*;

import java.math.BigDecimal;
import java.util.List;

public class BugReport {
    public int id;
    public BigDecimal reward;
    public BugStatus statusEnum;
    public BugReportSource sourceEnum;
    public Bug bugSpecification;
    public List<Tag> bugTags;

    public BugReport(int id, BigDecimal reward, BugStatus statusEnum, BugReportSource sourceEnum, Bug bugSpecification, List<Tag> bugTags) {
        this.id = id;
        this.reward = reward;
        this.statusEnum = statusEnum;
        this.sourceEnum = sourceEnum;
        this.bugSpecification = bugSpecification;
        this.bugTags = bugTags;
    }
}
