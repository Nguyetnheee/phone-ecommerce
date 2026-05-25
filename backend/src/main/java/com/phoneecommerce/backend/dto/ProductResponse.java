package com.phoneecommerce.backend.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductResponse {

    private Long id;

    private String name;

    private String brand;

    private String description;

    private BigDecimal price;

    private Integer stockQuantity;

    private String imageUrl;

    private String storage;

    private String ram;

    private String color;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}
