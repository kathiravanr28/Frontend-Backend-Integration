package frontend_backend_integration.demo.controller;

import frontend_backend_integration.demo.model.entity.User;
import frontend_backend_integration.demo.security.JwtTokenProvider;
import frontend_backend_integration.demo.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("/login")
    public Map<String, String> login(@RequestBody User request) {
        User user = authService.authenticate(
                request.getEmail(),
                request.getPassword()
        );

        String token = jwtTokenProvider.generateToken(user.getEmail());
        return Map.of("token", token);
    }

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return authService.registerUser(user);
    }
}