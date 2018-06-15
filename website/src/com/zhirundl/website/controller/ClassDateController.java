package com.zhirundl.website.controller;

import com.zhirundl.website.model.ClassDateModel;
import com.zhirundl.website.model.Member;
import com.zhirundl.website.service.IClassDateService;
import com.zhirundl.website.service.IMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("/class")
public class ClassDateController {


	@Autowired
    IClassDateService classDateService;

    @RequestMapping("/selectAllByAjax")
    @ResponseBody
    public ModelMap selectAll(){
        List<ClassDateModel> models= classDateService.selectAll();
        ModelMap mm = new ModelMap();
        mm.put("classDateList",models);
        return mm;
    }

    @RequestMapping("/updateClassDate")
    public String updateClassDate(String[] classDate,String[] classProgress){
        List<ClassDateModel> models= new ArrayList<>();
        for(int i=0;i<classDate.length;i++){
            ClassDateModel classDateModel = new ClassDateModel();
            classDateModel.setId(i+1);
            classDateModel.setClassDate(classDate[i]);
            classDateModel.setClassProgress(classProgress[i]);
            models.add(classDateModel);
        }
        int count = classDateService.updateClassDate(models);
        return "redirect:/changeClassDate.html?count="+count;
    }

}
