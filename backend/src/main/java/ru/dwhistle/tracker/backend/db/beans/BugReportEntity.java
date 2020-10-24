package ru.dwhistle.tracker.backend.db.beans;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity(name = "BugReport")
public class BugReportEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int creatorId;
    private int assigneeId;
    private BugStatus status;
    private BigDecimal reward;
    private BugReportSource source;
    private String description;
    @OneToOne
    private BugEntity bugSpecification;
}
