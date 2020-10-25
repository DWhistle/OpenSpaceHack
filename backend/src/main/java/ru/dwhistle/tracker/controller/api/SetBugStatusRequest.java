package ru.dwhistle.tracker.controller.api;

import ru.dwhistle.tracker.backend.db.beans.BugStatus;

public class SetBugStatusRequest {
    public int requestId;
    public BugStatus bugStatus;
}
