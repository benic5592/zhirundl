package com.zhirundl.website.model;

import java.util.List;

public class Timeline {
    private String id;
    private String title;
    private String description;
    private String focus_date;
    private String initial_zoom;
    private int image_lane_height;
    private List<TaskResult> events;
    private TagModel tags;
    private List<LegendModel> legend;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getFocus_date() {
        return focus_date;
    }

    public void setFocus_date(String focus_date) {
        this.focus_date = focus_date;
    }

    public String getInitial_zoom() {
        return initial_zoom;
    }

    public void setInitial_zoom(String initial_zoom) {
        this.initial_zoom = initial_zoom;
    }

    public int getImage_lane_height() {
        return image_lane_height;
    }

    public void setImage_lane_height(int image_lane_height) {
        this.image_lane_height = image_lane_height;
    }

    public List<TaskResult> getEvents() {
        return events;
    }

    public void setEvents(List<TaskResult> events) {
        this.events = events;
    }

    public TagModel getTags() {
        return tags;
    }

    public void setTags(TagModel tags) {
        this.tags = tags;
    }

    public List<LegendModel> getLegend() {
        return legend;
    }

    public void setLegend(List<LegendModel> legend) {
        this.legend = legend;
    }
}
