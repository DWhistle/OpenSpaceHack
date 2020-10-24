package ru.dwhistle.tracker.backend.db.beans;

import javax.persistence.*;

@Entity(name = "User")
public class UserEntity {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    @Column(name = "Id", unique = true, nullable = false)
    private int id;
    @Column(name = "Username", unique = true, nullable = false, length = 100)
    private String username;
    @Column(name = "Name", nullable = false, length = 100)
    private String name;
    @Column(name = "Bio", nullable = false, length = 1000)
    private String bio;
    @Transient
    private Role roleEnum;
    @Basic
    @Column(name = "RoleId", nullable = false)
    private int role;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBio() {
        return bio;
    }

    public void setBio(String bio) {
        this.bio = bio;
    }

    public Role getRoleEnum() {
        return roleEnum;
    }

    public void setRoleEnum(Role roleEnum) {
        this.roleEnum = roleEnum;
    }

    @PostLoad
    void fillRoleFromDb() {
        if (role != 0) {
            roleEnum = Role.of(role);
        }
    }

    @PrePersist
    void assignRoleId() {
        if (roleEnum != null) {
            role = roleEnum.getId();
        }
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public Role getRole() {
        return roleEnum;
    }

    public void setRole(int role) {
        this.role = role;
    }

    public void setRole(Role role) {
        this.roleEnum = role;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }
}
