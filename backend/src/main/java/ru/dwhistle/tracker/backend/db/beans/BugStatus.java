package ru.dwhistle.tracker.backend.db.beans;

import java.util.Arrays;

public enum BugStatus {
    OPENED(1),
    IN_PROGRESS(2),
    COMPLETE(3);

    private final int id;

    private BugStatus(int id) {
        this.id = id;
    }

    public static BugStatus of(int id) {
        return Arrays.stream(BugStatus.values())
                .filter(r -> r.id == id)
                .findFirst()
                .orElseThrow();
    }

    public int getId() {
        return this.id;
    }
}
