package com.zhirundl.website.service.impl;

import com.zhirundl.website.dao.CMemberMapper;
import com.zhirundl.website.dao.MemberMapper;
import com.zhirundl.website.model.Member;
import com.zhirundl.website.service.IMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MemberServiceImpl implements IMemberService {

	@Autowired
	MemberMapper memberMapper;


	@Autowired
	CMemberMapper cMemberMapper;
	
	@Override
	public Member selectByPrimaryKey(Integer id) {
		return memberMapper.selectByPrimaryKey(id);
	}
	@Override
	public Member selectCMember(Integer id) {
		return cMemberMapper.selectCMember(id);
	}

	@Override
	public List<Member> searchMemberByName(Member member) {

		List<Member> members = new ArrayList<>();
		Member member1 = new Member();
		member1.setId(93784);
		member1.setName("a2");
		members.add(member1);
		member1 = new Member();
		member1.setId(93785);
		member1.setName("a1");
		members.add(member1);
		member1 = new Member();
		member1.setId(93786);
		member1.setName("a3");
		members.add(member1);
		cMemberMapper.addAll(members);



		return memberMapper.searchMemberByName(member);



	}

}