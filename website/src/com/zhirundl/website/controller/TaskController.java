package com.zhirundl.website.controller;

import com.zhirundl.website.model.*;
import com.zhirundl.website.service.IMemberService;
import com.zhirundl.website.service.ITaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("/task")
public class TaskController {


	@Autowired
    ITaskService taskService;

	@ResponseBody
    @RequestMapping("/selectTaskByDate")
    public ModelMap selectTaskByDate(TaskModel taskModel){
        ModelMap modelMap = new ModelMap();
        List<TaskModel> taskModelList= taskService.selectTaskByDate(taskModel);

        Timeline timeline = new Timeline();
        timeline.setId("时间线");
        timeline.setTitle("时间线");
        timeline.setDescription("");
        timeline.setFocus_date(taskModel.getDateFrom());
        timeline.setInitial_zoom("22");
        timeline.setImage_lane_height(100);

        List<TaskResult> results = new ArrayList<>();
        for(TaskModel task : taskModelList){
            TaskResult taskResult = new TaskResult();
            taskResult.setId(String.valueOf(task.getId()));
            taskResult.setTitle(task.getMemberName()+","+task.getTaskName());
            taskResult.setDescription(task.getTaskContent());
            taskResult.setStartdate(task.getDateFrom());
            taskResult.setEnddate(task.getDateTo());
            results.add(taskResult);
        }
        timeline.setEvents(results);

        TagModel tagModel = new TagModel();
        timeline.setTags(tagModel);
        List<LegendModel> legendModelList = new ArrayList<LegendModel>();
        timeline.setLegend(legendModelList);


        List<Timeline> timelineList = new ArrayList<>();
        timelineList.add(timeline);
        // 放入转发参数
        modelMap.put("timelineList", timelineList);
        return modelMap;
    }


    @ResponseBody
    @RequestMapping("/insertWithoutId")
    public ModelMap insertWithoutId(TaskModel taskModel){
        ModelMap modelMap = new ModelMap();
        int num = taskService.insertWithoutId(taskModel);

        // 放入转发参数
        modelMap.put("num", num);
        return modelMap;
    }
}
