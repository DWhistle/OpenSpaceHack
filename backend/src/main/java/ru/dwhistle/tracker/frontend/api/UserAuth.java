package ru.dwhistle.tracker.frontend.api;

import javax.validation.constraints.NotNull;

public class UserAuth {
    @NotNull
    public String username;
    @NotNull
    public String password;
}
