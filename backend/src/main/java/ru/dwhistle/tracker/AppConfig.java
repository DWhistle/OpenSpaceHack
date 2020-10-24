package ru.dwhistle.tracker;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.context.annotation.RequestScope;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import ru.dwhistle.tracker.controller.util.UserContext;
import ru.dwhistle.tracker.controller.util.UserAuthInterceptor;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
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
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.any())
                .paths(PathSelectors.any())
                .build();
    }

    @Bean
    public WebMvcConfigurer webMvcConfigurer(UserAuthInterceptor userAuthInterceptor) {
        return new WebMvcConfigurer() {
            @Override
            public void addInterceptors(InterceptorRegistry registry) {
                registry.addInterceptor(userAuthInterceptor)
                        .addPathPatterns("/**")
                        .excludePathPatterns("auth/**",
                        "/swagger-ui/**", "/configuration/**", "/swagger-resources/**",
                        "/v2/api-docs", "/webjars/**");
            }
        };
    }

    @Bean
    @RequestScope
    public UserContext requestScopeUserData() {
        return new UserContext();
    }
}
