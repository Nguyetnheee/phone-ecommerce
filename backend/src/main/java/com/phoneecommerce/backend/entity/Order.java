package com.phoneecommerce.backend.entity;

import com.phoneecommerce.backend.enums.OrderStatus;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Data
@Table(name= "Orders")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user_id;

    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    private String name;

    private String address;

    private String phone_number;

    @OneToMany(mappedBy = "id",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private List<CartItem> items = new ArrayList<>();
}
