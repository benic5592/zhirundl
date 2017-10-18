package com.zhirundl.website.service;

import com.zhirundl.website.model.Member;

import java.util.List;


public interface IMemberService {


	public Member selectByPrimaryKey(Integer id);
	public Member selectCMember(Integer id);
	public List<Member> searchMemberByName(Member member);


}