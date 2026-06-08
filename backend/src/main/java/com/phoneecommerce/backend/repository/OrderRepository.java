package com.phoneecommerce.backend.repository;

import com.phoneecommerce.backend.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {
@Query("SELECT c FROM Order c join fetch c.user_id a")
    Optional<Order> findAllByUser_id(Long id);
    Optional<Order> findById(Long id);
}
