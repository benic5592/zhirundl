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

  <form action="getMemberByName.action">
    <input type="text" name="name" >
    <input type="submit" value="getMember">
  </form>
  ${member.name}


  <form action="getMember.action">
    <input type="text" name="id" >
    <input type="submit" value="getMember">
  </form>
  ${member}
  index.jsp
  <form action="toIndex2.action">
    <input type="submit" value="toIndex2">
  </form>
  <br>
  <button id="btnJson">getByJson</button>
  <p id="p1"></p>


  <script src="jquery-1.11.3.js"></script>
  <script>
      $(function () {
          $("#btnJson").click(function () {
              $.post('getMemberByJson.action',{
                  id:'1'
              },function (data) {
                  $("#p1").html(data.id+","+data.name);
              },"json");
          });


      });
    
  </script>
  </body>
</html>
