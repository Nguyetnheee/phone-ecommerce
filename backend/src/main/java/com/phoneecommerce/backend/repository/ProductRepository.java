package com.phoneecommerce.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phoneecommerce.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByBrandIgnoreCase(String brand);

    List<Product> findByNameContainingIgnoreCase(String name);
}
