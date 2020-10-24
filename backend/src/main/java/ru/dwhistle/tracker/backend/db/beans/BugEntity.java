package ru.dwhistle.tracker.backend.db.beans;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "Bug")
public class BugEntity {
    @Id
    @Column(name = "Id", unique = true, nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(name = "Name", nullable = false)
    private String name;
    @Column(name = "OS", nullable = false)
    private String os;
    @Column(name = "OSVersion", nullable = false)
    private String osVersion;
    @Column(name = "AppVersion", nullable = false)
    private String appVersion;
    @Column(name = "ReproductionSteps", nullable = false)
    private String stepsToReproduce;
    @Column(name = "ScreenShotUrl", nullable = false)
    private String screenshotUrl;
    @Column(name = "CreationTime", nullable = false, updatable = false)
    private Date creationTime;
    @OneToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name = "user_id")
    private UserEntity bugCreator;

    public BugEntity() {
    }

    public BugEntity(int id, String name, String os, String osVersion, String appVersion, String stepsToReproduce, String screenshotUrl, Date creationTime, UserEntity bugCreator) {
        this.id = id;
        this.name = name;
        this.os = os;
        this.osVersion = osVersion;
        this.appVersion = appVersion;
        this.stepsToReproduce = stepsToReproduce;
        this.screenshotUrl = screenshotUrl;
        this.creationTime = creationTime;
        this.bugCreator = bugCreator;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOs() {
        return os;
    }

    public void setOs(String os) {
        this.os = os;
    }

    public String getOsVersion() {
        return osVersion;
    }

    public void setOsVersion(String osVersion) {
        this.osVersion = osVersion;
    }

    public String getAppVersion() {
        return appVersion;
    }

    public void setAppVersion(String appVersion) {
        this.appVersion = appVersion;
    }

    public String getStepsToReproduce() {
        return stepsToReproduce;
    }

    public void setStepsToReproduce(String stepsToReproduce) {
        this.stepsToReproduce = stepsToReproduce;
    }

    public String getScreenshotUrl() {
        return screenshotUrl;
    }

    public void setScreenshotUrl(String screenshotUrl) {
        this.screenshotUrl = screenshotUrl;
    }

    public Date getCreationTime() {
        return creationTime;
    }

    public void setCreationTime(Date creationTime) {
        this.creationTime = creationTime;
    }

    public UserEntity getBugCreator() {
        return bugCreator;
    }

    public void setBugCreator(UserEntity bugCreator) {
        this.bugCreator = bugCreator;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
