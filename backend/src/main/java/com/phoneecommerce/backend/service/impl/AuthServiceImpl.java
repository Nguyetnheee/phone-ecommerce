package com.phoneecommerce.backend.service.impl;

import com.phoneecommerce.backend.config.JwtService;
import com.phoneecommerce.backend.dto.request.LoginRequest;
import com.phoneecommerce.backend.dto.request.RegisterRequest;
import com.phoneecommerce.backend.dto.response.LoginResponse;
import com.phoneecommerce.backend.dto.response.RegisterResponse;
import com.phoneecommerce.backend.entity.User;
import com.phoneecommerce.backend.enums.UserRole;
import com.phoneecommerce.backend.exceptions.AppException;
import com.phoneecommerce.backend.repository.UserRepository;
import com.phoneecommerce.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    UserRepository userRepo;

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    JwtService jwtService;

    @Override
    public LoginResponse login(LoginRequest loginRequest) {
        User user = userRepo.findUserByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new AppException(HttpStatus.BAD_REQUEST , "Email không tồn tại"));

        boolean ok = passwordEncoder.matches(loginRequest.getPassword(), user.getPassword());
        if(!ok){
            throw  new AppException(HttpStatus.UNAUTHORIZED,"Email hoặc mật khẩu sai");
        }
        String token = jwtService.generateToken(user);
        return LoginResponse.builder()
                .email(user.getEmail())
                .role(user.getRole())
                .token(token)
                .build();
    }



    @Override
    public RegisterResponse register(RegisterRequest registerRequest) {
        if (userRepo.existsByEmail(registerRequest.getEmail())) {
            throw new AppException(
                    HttpStatus.BAD_REQUEST, "Email đã tồn tại"
            );
        }
        User users = User.builder()
                .email(registerRequest.getEmail())
                .fullname(registerRequest.getFullname())
                .password(passwordEncoder.encode(registerRequest.getPassword()))
                .role(UserRole.USER)
                .build();
        User saveUser = userRepo.save(users);
        return new RegisterResponse(

                saveUser.getFullname(),
                "Thành công",
                saveUser.getEmail()

        );
    }
}
