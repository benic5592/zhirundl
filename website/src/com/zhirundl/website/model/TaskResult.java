package com.zhirundl.website.model;

public class TaskResult {

    private String id;

    private String title;

    private String description;

    private String startdate;
    private String enddate;

    private int low_threshold=0;
    private int high_threshold = 50;

    private String importance="50";
    private int y_position=0;

    private String image="";
    private String link="";
    /**
     *  ye,no,da
     */
    private String date_display = "da";
    private String icon = "none";
    private String modal_type = "full";

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

    public String getStartdate() {
        return startdate;
    }

    public void setStartdate(String startdate) {
        this.startdate = startdate;
    }

    public String getEnddate() {
        return enddate;
    }

    public void setEnddate(String enddate) {
        this.enddate = enddate;
    }

    public int getLow_threshold() {
        return low_threshold;
    }

    public void setLow_threshold(int low_threshold) {
        this.low_threshold = low_threshold;
    }

    public int getHigh_threshold() {
        return high_threshold;
    }

    public void setHigh_threshold(int high_threshold) {
        this.high_threshold = high_threshold;
    }

    public String getImportance() {
        return importance;
    }

    public void setImportance(String importance) {
        this.importance = importance;
    }

    public int getY_position() {
        return y_position;
    }

    public void setY_position(int y_position) {
        this.y_position = y_position;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public String getDate_display() {
        return date_display;
    }

    public void setDate_display(String date_display) {
        this.date_display = date_display;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getModal_type() {
        return modal_type;
    }

    public void setModal_type(String modal_type) {
        this.modal_type = modal_type;
    }
}
