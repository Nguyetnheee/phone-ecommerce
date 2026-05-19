package com.phoneecommerce.backend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.phoneecommerce.backend.dto.ProductResponse;
import com.phoneecommerce.backend.entity.Product;
import com.phoneecommerce.backend.mapper.ProductMapper;
import com.phoneecommerce.backend.repository.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<ProductResponse> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(ProductMapper::toResponse)
                .toList();
    }

    public ProductResponse getProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + id));

        return ProductMapper.toResponse(product);
    }
}
