package com.example.backend.service.impl;

import com.example.backend.mapper.MaterialMapper;
import com.example.backend.model.Material;
import com.example.backend.service.MaterialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class MaterialServiceImpl implements MaterialService {
    @Autowired
    private MaterialMapper MaterialMapper;

    @Override
    public List<Material> findAllMaterial() {
        return MaterialMapper.findAllMaterial();
    }

    @Override
    public Material findMaterialByUserId(int userid) {
        return MaterialMapper.findMaterialByUserId(userid);
    }

    @Override
    public int add(Material material) {
        return MaterialMapper.add(material);
    }

    @Override
    public int delete(int id) {
        return MaterialMapper.delete(id);
    }

    @Override
    public int update(Material material) {
        return MaterialMapper.update(material);
    }

}
