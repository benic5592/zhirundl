<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017/7/25
  Time: 22:57
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
  <head>
    <title>$Title$</title>
  </head>
  <body>

  <form action="getMember.action">
    <input type="text" name="id" >
    <input type="submit" value="submit">
  </form>
  ${members[0].id},
  ${members[0].name},

  <%--${member.id},--%>
  <%--${member.name},--%>
  <%--${member.age},--%>
  <%--${member.sex},--%>
  <%--${member.department},--%>
  <%--${member.salary}--%>
  /jsp/index.jsp
  </body>
</html>
