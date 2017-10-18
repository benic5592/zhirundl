package com.zhirundl.website.controller;

import com.zhirundl.website.model.Member;
import com.zhirundl.website.service.IMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;


@Controller
@RequestMapping("")
public class MemberController {


	@Autowired
    IMemberService memberService;

    @RequestMapping("/getMemberByName")
    public ModelAndView getMemberByName(Member mem){
        ModelAndView mav = new ModelAndView();
        List<Member> member= memberService.searchMemberByName(mem);

        // 放入转发参数
        mav.addObject("members", member);
        // 放入jsp路径
        mav.setViewName("index");
        return mav;
    }






	@RequestMapping("/getMember")
    public ModelAndView searchMember(Member mem){
        ModelAndView mav = new ModelAndView();
        Member member= memberService.selectByPrimaryKey(mem.getId());

        // 放入转发参数
        mav.addObject("member", member);
        // 放入jsp路径
        mav.setViewName("index");
        return mav;
    }

    @RequestMapping("/getMemberByJson")
    @ResponseBody
    public Member getMember(Integer id){
        Member member= memberService.selectCMember(id);

        return member;
    }

    @RequestMapping("/toIndex2")
    public String toIndex2(){
        return "index2";
    }

}
