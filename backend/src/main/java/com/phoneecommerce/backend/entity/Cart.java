package com.phoneecommerce.backend.entity;

import com.phoneecommerce.backend.enums.OrderStatus;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name= "order")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @OneToOne
    @JoinColumn(name = "User_id", unique = true)
    private User user;

    @Column(name = "Status")
    private OrderStatus status;

    @Column(name = "Receiver")
    private String name;

    @Column(name = "Address")
    private String address;

    @Column(name = "Phone")
    private String number;

    @OneToMany(mappedBy = "cart_id", cascade = CascadeType.ALL, orphanRemoval = true)
    @Builder.Default
    private List<CartItem> orderItems = new ArrayList<>();
}
