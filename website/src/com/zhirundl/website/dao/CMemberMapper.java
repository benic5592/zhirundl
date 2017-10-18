package com.zhirundl.website.dao;

import com.zhirundl.website.model.Member;

import java.util.List;

public interface CMemberMapper extends MemberMapper{


    Member selectCMember(Integer id);

    int addAll(List<Member> members);

}