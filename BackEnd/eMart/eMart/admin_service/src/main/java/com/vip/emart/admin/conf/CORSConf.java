package com.vip.emart.admin.conf;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CORSConf {
	private static final Logger LOG = LoggerFactory.getLogger(CORSConf.class);

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				if (LOG.isInfoEnabled()) {
					LOG.info("init CORSConfiguration");
				}
				registry.addMapping("/*").allowedHeaders("*").allowedMethods("*").allowedOrigins("*")
						.allowCredentials(true);
			}
		};
	}
}