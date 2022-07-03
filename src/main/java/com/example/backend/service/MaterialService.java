package com.example.backend.service;

import com.example.backend.model.Material;
import java.util.List;

public interface MaterialService {
    List<Material> findAllMaterial();

    Material findMaterialByUserId(int userid);

    int add(Material material);

    int update(Material material);

    int delete(int id);
}
