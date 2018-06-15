package com.zhirundl.website.model;

public class ClassDateModel {
    private Integer id;

    private String classDate;

    private String classProgress;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getClassDate() {
        return classDate;
    }

    public void setClassDate(String classDate) {
        this.classDate = classDate == null ? null : classDate.trim();
    }

    public String getClassProgress() {
        return classProgress;
    }

    public void setClassProgress(String classProgress) {
        this.classProgress = classProgress == null ? null : classProgress.trim();
    }

}