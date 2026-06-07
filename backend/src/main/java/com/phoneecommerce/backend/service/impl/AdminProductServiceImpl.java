package com.phoneecommerce.backend.service.impl;

import com.phoneecommerce.backend.dto.request.ProductRequest;
import com.phoneecommerce.backend.dto.request.UpdateOrderStatusRequest;
import com.phoneecommerce.backend.dto.response.ProductResponse;
import com.phoneecommerce.backend.entity.Order;
import com.phoneecommerce.backend.entity.Product;
import com.phoneecommerce.backend.enums.OrderStatus;
import com.phoneecommerce.backend.repository.OrderRepository;
import com.phoneecommerce.backend.repository.ProductRepository;
import com.phoneecommerce.backend.service.AdminProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminProductServiceImpl implements AdminProductService {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    OrderRepository orderRepository;
    @Override
    public ProductResponse createProduct(ProductRequest productRequest) {
        boolean existed = productRepository.existsByName(productRequest.getName());
        if (existed){
            throw new RuntimeException("Sản phẩm đã tồn tại");
        }
        Product newProduct = Product.builder()
                .name(productRequest.getName())
                .brand(productRequest.getBrand())
                .description(productRequest.getDescription())
                .price(productRequest.getPrice())
                .stockQuantity(productRequest.getStockQuantity())
                .imageUrl(productRequest.getImageUrl())
                .storage(productRequest.getStorage())
                .ram(productRequest.getRam())
                .color(productRequest.getColor())
                .build();
        productRepository.save(newProduct);
        return ProductResponse.builder().build();
    }

    @Override
    public ProductResponse updateProduct(ProductRequest productRequest, Long id) {
        Product newProduct = productRepository.findById(id).orElseThrow(() -> {
            throw new RuntimeException("Sản phẩm không tồn tại");
        });
        productRepository.save(newProduct);
        return ProductResponse.builder().build();
    }

    @Override
    public ProductResponse deleteProduct(Long id) {
        Product newProduct = productRepository.findById(id).orElseThrow(() -> {
            throw new RuntimeException("Sản phẩm không tồn tại");
        });
        productRepository.delete(newProduct);
        return ProductResponse.builder().build();
    }

    @Override
    public List<Product> getAllProduct() {
        List<Product> productList = productRepository.findAll();
        return productList;
    }

    @Override
    public ProductResponse changeOrderStatus(Long order_id, UpdateOrderStatusRequest newStatus) {
        Order order = orderRepository.findById(order_id).orElseThrow(() -> {
            throw new RuntimeException("Sản phẩm không tồn tại");
        });
        order.setStatus(newStatus.getStatus());
        return ProductResponse.builder().build();
    }


}
