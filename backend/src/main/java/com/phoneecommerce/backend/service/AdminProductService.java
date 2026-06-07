package com.phoneecommerce.backend.service;

import com.phoneecommerce.backend.dto.request.ProductRequest;
import com.phoneecommerce.backend.dto.request.UpdateOrderStatusRequest;
import com.phoneecommerce.backend.dto.response.ProductResponse;
import com.phoneecommerce.backend.entity.Product;
import com.phoneecommerce.backend.enums.OrderStatus;

import java.util.List;

public interface AdminProductService {
    ProductResponse createProduct(ProductRequest productRequest);
    ProductResponse updateProduct(ProductRequest productRequest,Long id);
    ProductResponse deleteProduct(Long id);
    List<Product> getAllProduct();
    ProductResponse changeOrderStatus(Long order_id, UpdateOrderStatusRequest newStatus);
}
