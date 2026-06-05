package com.phoneecommerce.backend.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.phoneecommerce.backend.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findByBrandIgnoreCase(String brand);

    List<Product> findByNameContainingIgnoreCase(String name);

    boolean existsByName(String name);
    Optional<Product> findByName(String name);
    List<Product> findAllByName(String name);
}
