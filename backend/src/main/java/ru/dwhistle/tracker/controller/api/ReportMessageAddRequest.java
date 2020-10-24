package ru.dwhistle.tracker.controller.api;

import javax.validation.constraints.NotNull;

public class ReportMessageAddRequest {
    @NotNull
    public Integer reportId;
    @NotNull
    public String text;
}
