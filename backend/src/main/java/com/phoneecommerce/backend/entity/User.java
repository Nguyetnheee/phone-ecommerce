package com.phoneecommerce.backend.entity;

import com.phoneecommerce.backend.enums.UserRole;
import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;


@Entity
@Table(name= "Users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Fullname")
    private String fullname;
    @Column(name = "Email")
    private String email;
    @Column(name = "Password")
    private String password;
    @Enumerated(EnumType.STRING)
    private UserRole role;
}
