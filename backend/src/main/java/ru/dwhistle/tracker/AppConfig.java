package ru.dwhistle.tracker;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import ru.dwhistle.tracker.frontend.UserContext;
import ru.dwhistle.tracker.frontend.util.UserInterceptor;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@Configuration
@EnableJpaRepositories("ru.dwhistle.tracker.backend.db")
@EnableSwagger2
@EnableWebMvc
public class AppConfig {
    @Bean
    public Docket getDocket() {
        return new Docket(DocumentationType.SWAGGER_2);
    }

    @Bean
    public WebMvcConfigurer webMvcConfigurer(UserInterceptor userInterceptor) {
        return new WebMvcConfigurer() {
            @Override
            public void addInterceptors(InterceptorRegistry registry) {
                registry.addInterceptor(userInterceptor);
            }
        };
    }

    @Bean
    @RequestScope
    public UserContext requestScopeUserData() {
        return new UserContext();
    }
}
