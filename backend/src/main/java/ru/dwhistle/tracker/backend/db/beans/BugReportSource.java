package ru.dwhistle.tracker.backend.db.beans;

import java.util.Arrays;

public enum BugReportSource {
    SYSTEM(1),
    TELEGRAM(2),
    API(3);

    private final int id;

    private BugReportSource(int id) {
        this.id = id;
    }

    public static BugReportSource of(int id) {
        return Arrays.stream(BugReportSource.values())
                .filter(r -> r.id == id)
                .findFirst()
                .orElseThrow();
    }

    public int getId() {
        return this.id;
    }
}
