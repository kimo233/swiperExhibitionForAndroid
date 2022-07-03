package com.example.backend.mapper;

import com.example.backend.model.Material;
import org.apache.ibatis.annotations.*;
import java.util.List;

@Mapper
public interface MaterialMapper {
    @Select("select * from Material")
    List<Material> findAllMaterial();

    @Select("select * from Material UserId=#{userid}")
    Material findMaterialByUserId(int userid);

    @Insert("insert into Material (MaterialName,Base64,UserId) " +
            "values (#{materialname},#{base64}),#{userid})")
    int add(Material material);

    @Update("update Material set MaterialName=#{materialname} where MaterialId=#{materialid}")
    int update(Material material);

    @Delete("delete from Material where MaterialId=#{id}")
    int delete(int id);
}
