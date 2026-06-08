package com.phoneecommerce.backend.service;

import com.phoneecommerce.backend.dto.request.LoginRequest;
import com.phoneecommerce.backend.dto.request.RegisterRequest;
import com.phoneecommerce.backend.dto.response.LoginResponse;
import com.phoneecommerce.backend.dto.response.RegisterResponse;

public interface AuthService {
    LoginResponse login(LoginRequest loginRequest);

    RegisterResponse register(RegisterRequest registerRequest);
}
