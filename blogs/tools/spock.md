---
date: 2021-05-31
title: Spock测试框架使用指北
categories:
  - Java
  - Tool
tags:
  - Java
  - Tool
  - Test
describe: 基于Java和Groovy应用程序测试和规范框架,测试结果层次清晰，提供各种标签让编写测试代码更加高效和简洁,通用的，简单的，结构化的描述语言。
---

[[toc]]

### 一、Spock是什么

- 基于Java和Groovy应用程序测试和规范框架
- 测试结果层次清晰，提供各种标签让编写测试代码更加高效和简洁
- 通用的，简单的，结构化的描述语言

官网描述：

>Spock is a testing and specification framework for Java and Groovy applications. What makes it stand out from the crowd is its beautiful and highly expressive specification language. Thanks to its JUnit runner, Spock is compatible with most IDEs, build tools, and continuous integration servers. Spock is inspired from JUnit, RSpec, jMock, Mockito, Groovy, Scala, Vulcans, and other fascinating life forms.

Spock规范描述示例：

```java
@RunWith(PowerMockRunner.class)         // ------ 测试运行框架，支持静态类mock  ---|   Step 1
@PowerMockRunnerDelegate(Sputnik.class) // --- 配合PowerMock 一起使用------------|
@PrepareForTest([Test.class])           // --- 指明mock静态类--------------------|
@PowerMockIgnore("javax.management.*")  // ------ 去掉一些报错信息  --------------|
class TestSpec extends Specification {
    def "DoTask"() {
        given: 							//---- Mock 准备： 数据mock，数据插桩 ----|   Step2
        TestService testService = new TestService()
        Test client = Mock(SeoPlatformManagerClient.class)
        PowerMockito.mockStatic(TestStatic.class)
        PowerMockito.when(TestStatic.getInstance()).thenReturn(client)
        client.queryTags(_) >> responseType
        when:							// --- 执行mock流程,获取mock运行结果--------| Step 3
        TestResult result=testService.doSomeThing()
        then:							// ----verify mock结果  -----------------| Step 4
        fligtCitesTimes * result.check
        where:                          // ----mock结果预期结果  -----------------| Step 5
        totalSize | dataChangeLastTime | tagList                                         || fligtCitesTimes
        0         | 0L                 | Lists.newArrayList()                            || 0
        1         | 1L                 | Arrays.asList(new TagDto(1L, "EN", "Test", 1L)) || 0
        2         | 2L                 | Arrays.asList(new TagDto(2L, "EN", "Test", 1L)) || 0

    }
}
```

### 二、Spock，Junit，Jmock以及PowerMock区别

|               | mock   | 静态mock | 结构化               | 兼容groovy | IDEA支持 |
| ------------- | ------ | -------- | -------------------- | ---------- | -------- |
| Spock         | 支持   | 支持     | 语义层面定义测试流程 | 兼容       | 支持     |
| Junit         | 不支持 | 不支持   | 顺序执行             | 不兼容     | 支持     |
| Jmock/Mockito | 支持   | 不支持   | 顺序执行             | 不兼容     | 不支持   |
| PoweMock      | 支持   | 支持     | 顺序执行             | 不兼容     | 不支持   |

### 三、Spock项目引用配置

以Java项目，Maven 构建工具为例。

#### 1. POM版本依赖

```groovy
<spock.version>1.3-groovy-2.5</spock.version>
<groovy.version>2.5.4</groovy.version>
 
<!-- spock -->
<dependency>
    <groupId>org.spockframework</groupId>
    <artifactId>spock-core</artifactId>
    <version>${spock.version}</version>
    <scope>test</scope>
</dependency>
<!-- spock和spring集成 -->
<dependency>
    <groupId>org.spockframework</groupId>
    <artifactId>spock-spring</artifactId>
    <version>${spock.version}</version>
    <scope>test</scope>
</dependency>
<!-- spock依赖的groovy -->
<dependency>
    <groupId>org.codehaus.groovy</groupId>
    <artifactId>groovy-all</artifactId>
    <type>pom</type>
    <version>${groovy.version}</version>
    <exclusions>
        <exclusion>
            <artifactId>groovy-test-junit5</artifactId>
            <groupId>org.codehaus.groovy</groupId>
        </exclusion>
        <exclusion>
            <artifactId>groovy-testng</artifactId>
            <groupId>org.codehaus.groovy</groupId>
        </exclusion>
    </exclusions>
</dependency>
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-test</artifactId>
    <scope>test</scope>
</dependency>
 
<!--groovy 编译-->
<plugin>
    <groupId>org.codehaus.gmavenplus</groupId>
    <artifactId>gmavenplus-plugin</artifactId>
    <version>1.6</version>
    <executions>
        <execution>
            <goals>
                <goal>compile</goal>
                <goal>compileTests</goal>
            </goals>
        </execution>
    </executions>
</plugin>
<!--添加spec的配置，测试用例必须以Spec结尾-->
<plugin>
    <artifactId>maven-surefire-plugin</artifactId>
    <version>${surefire.version}</version>
    <configuration>
        <includes>
            <include>**/*Spec.java</include>
            <include>**/*Test.java</include>
        </includes>
    </configuration>
</plugin>
```



>**Note**:  
>
>1. spock 版本是1.3-groovy-2.5。
>2. Spock 2.x 的版本里官方团队已经移除Sputnik, 不再支持代理运行power mock。
>3. Spock 2.0是基于JUnit5的, PowerMock尚不与JUnit 5兼容
>4. 项目中没有用过groovy，还需要添加groovy的maven编译插件，这样才能编译spock的单测代码。

#### 2. 新建测试用例

```
project
│
└───src
│   │   main
│   └───test
│       │   groovy // ---groovy的约定，是默认编译groovy包下的单测，需要建个groovy包存放spock的单测代码
│       │   java   // ---java测试单例目录
│       │   resources
```

>**Note:** 
>
>1. 标记groovy目录为测试源目录(IDEA 工具 Test Sources Root)
>2. groovy创建单测文件groovy class ,非java class.

#### 3. 执行单元测试

mvn test，按照上面两步的配置保证spock单测代码运行成功后可以执行mvn clean test命令

>**NOTE**:
>
>按照spock的规范来说，单测代码文件的命名应该是以Spec为后缀的，如果你严格按照这个规范
>
>命名单测文件，比如“TestSpec”.

### 四、Spock 使用示例

#### 1. 第三方依赖

第三方代码示例：

```java
Class ThirdParty{
	public T call(R r){
		.....
	}
}
```

项目代码使用场景

```java
@Component
Class ThirdPartyDemo{
	@Autowired
	private ThirdParty thirdParty;
	
	public T doSomething(R r){
		T t=thirdParty.call(r);
		.....
	}
	
}
```

测试用例

```java
class ThirdPartyDemoSpec extends Specification {
    def "DoSomeThing"() {
        given:
        ThirdPartyDemo testService = new ThirdPartyDemo()
        ThirdParty thirdParty = Mock(ThirdParty.class);
        T t = Mock(T.class);
        R r = Mock(R.class)
        PowerMockito.when(thirdParty.call(_)).thenReturn(t)
        t.something -> ttt
        when:
        TestResult result = testService.doSomeThing(r)
        then:
        result * result.check
        where:
        ttt   || result
        test  || true
        test2 || false
    }
}
```

>**Note**:
>
>**1. given**: 输入条件(前置参数)
>
>**2. when**: 执行行为(mock接口, 真实调用)
>
>**3. then**: 输出条件(验证结果)
>
>**4. where**:预期结果
>
>5 . ```thirdParty.call(_)``` 中的```_``` 代表任意条件
>
>6 . ```t.something -> ttt``` 中的 ```-> ``` 代表mock过程，当然PowerMock 还是采用 when . thenReturn 方式

#### 2. 多分支场景

多分支方代码示例：

```java
Class ThirdParty{
	public T call(R r){
        if(r.something==1){
            return a;
        }
        if(r.something==2){
            return b;
        }
         if(r.something==3){
             return c;
         }
		.....
	}
}
```

项目代码使用场景

```java
@Component
Class ThirdPartyDemo{
	@Autowired
	private ThirdParty thirdParty;
	
	public T doSomething(R r){
		T t=thirdParty.call(r);
		.....
	}
	
}
```

测试用例

```java
class ThirdPartyMultiConditionDemoSpec extends Specification {
    def "DoSomeThing"() {
        given:
        ThirdPartyDemo testService = new ThirdPartyDemo()
        ThirdParty thirdParty = Mock(ThirdParty.class);
        T t = Mock(T.class);
        R r = Mock(R.class)
        PowerMockito.when(thirdParty.call(_)).thenReturn(t)
        r.something -> ttt
        when:
        TestResult result = testService.doSomeThing(r)
        then:
        result * result.check
        where:
        ttt   || result
        1  || true
        2 || false
        3 || false
    }
}
```

>**Note**:
>
>**where**: 输入预期结果是一个Table，能够覆盖多个分支

#### 3. 静态类MOCK

静态代码示例：

```java
Class StaticClass{
	public static T call(R r){
		.....
	}
}
```

项目代码使用场景

```java
@Component
Class StaticClassDemo{
	
	public T doSomething(R r){
		T t=StaticClass.call(r);
		.....
	}
	
}
```

测试用例

```java
package com.ctrip.ibu.nlp.service.soa.service.seo


import com.ctrip.ibu.seo.platform.admin.contract.QueryTagsResponseType
import com.ctrip.ibu.seo.platform.admin.contract.SeoPlatformManagerClient
import com.ctrip.ibu.seo.platform.admin.contract.TagDto
import com.google.common.collect.Lists
import org.junit.runner.RunWith
import org.powermock.api.mockito.PowerMockito
import org.powermock.core.classloader.annotations.PowerMockIgnore
import org.powermock.core.classloader.annotations.PrepareForTest
import org.powermock.modules.junit4.PowerMockRunner
import org.powermock.modules.junit4.PowerMockRunnerDelegate
import org.spockframework.runtime.Sputnik
import spock.lang.Specification

@RunWith(PowerMockRunner.class)
@PowerMockRunnerDelegate(Sputnik.class)
@PrepareForTest([StaticClass.class])
@PowerMockIgnore("javax.management.*")
class StaticClassDemoSpec extends Specification {
    def "DoSomeThing"() {
        given:
        PowerMockito.mockStatic(StaticClass.class)
        T t = Mock(T.class);
        R r = Mock(R.class)
        PowerMockito.when(StaticClass.call(_)).thenReturn(t)
        t.something -> ttt
        when:
        TestResult result = testService.doSomeThing(r)
        then:
        result * result.check
        where:
        ttt   || result
        test  || true
        test2 || false
    }
}

```

>**Note**:
>
>1. @PowerMockRunnerDelegate(Sputnik.class)交给spock代理执行
>2. @PrepareForTest([StaticClass.class]) 指定需要执行的静态类
>3. 结合PoweMock 实现静态类mock

#### 4. void 方法测试

第三方代码

```java
Class ThirdParty{
	public void call(R r){
		.....
	}
}
```

项目代码使用场景

```java
@Component
Class ThirdPartyDemo{
@Autowired
	private ThirdParty thirdParty;
	public T doSomething(R r){
		 thirdParty.call(r);
		.....
	}
	
}
```

测试用例

```java
class ThirdPartyDemoExceptionSpec extends Specification {
    def "DoSomeThing"() {
        given:
        ThirdPartyDemo testService = new ThirdPartyDemo()
        ThirdParty thirdParty = Mock(ThirdParty.class);
        T t = Mock(T.class);
        R r = Mock(R.class)
        PowerMockito.when(thirdParty.call(_)).thenReturn(t)
        t.something -> ttt
        
        when:
        testService.doSomeThing(r)
        then:
       1*thirdParty.call(r)
    }
}
```

>**Note**:
>
>``1*thirdParty.call(r)`` 中 1 代表执行的次数， 二“*” 代表条件相等

#### 5. 异常情况用法

项目代码使用场景

```java
@Component
Class ThirdPartyDemo{

	public void doSomething(R r){
		.....
	}
	
}
```

测试用例

```java
class ThirdPartyVoidSpec extends Specification {
    def "DoSomeThing"() {
        given:
        ThirdPartyDemo testService = new ThirdPartyDemo()
        ThirdParty thirdParty = Mock(ThirdParty.class);
        T t = Mock(T.class);
        R r = Mock(R.class)
        PowerMockito.when(thirdParty.call(_)).thenReturn(t)
        t.something -> ttt
        testService.doSomeThing(r)
        when:
        def ex = thrown(expectedException)
        then:
        ex.message == expectedMessage
        where:
        ttt   | expectedException || expectedMessage
        test  | APIExeption       || "Request is null"
        test2 | APIExeption       || "ttt is null"
    }
}
```

>**Note**:
>
>then 标签里直接标明throw exception ，并且指定exception类型，以及校验异常信息

### 五、小结

#### 1. spock的优点

- 遵循BDD模式、功能强大、语义规范、可读性好、易于维护、富有表现力

- 更灵活的控制测试行为，专注代码的逻辑测试而不是书写语法上

- 用自然语言描述测试步骤（非技术人员也能看懂测试用例）

- 兼容mock框架，可以和项目中的java单测代码共存, 降低迁移成本

- IDE支持良好

- Groovy动态语言，DSL，语法简洁，约定优于配置，适合敏捷开发

#### 2. spock的缺点

##### 1.学习成本

spock本身没什么学习成本，因为它的限制条件不多：必须有至少一个标签、有when必有then...

主要是groovy语言，如果用过的会觉得很容易，其实真的很容易，只要你会java，就会groovy！

groovy还有一个特点就是你可以在spock的单测代码里完全用java代码写，因为groovy完全兼容java语法，

或者java和groovy混着写都没问题，因为最终都是编译成class执行的，JVM虚拟机不关心源文件是什么语言。

(其实groovy的用途很广,像我们的Jenkins里的pipeline, Elasticsearch, hadoop框架中很多插件都是使用groovy开发的)

##### 2.单测代码执行时间问题

groovy语法的简洁可以简单理解为语法糖(其实不完全是，在jvm中执行使用的是invokeDynamic指令)，

语法糖会相应的增加jvm构建AST语法树的时间，大家在运行的时候可能会注意到spock代码的编译

**要比java的单测代码慢一些**(视代码复杂度而言，平均大概慢1-2s)，但是执行的时间和java的差不多，

如果对这个有要求，**慎重使用**, 最好自己实际验证下 

##### 3. Spock不支持Java的静态,final方法的mock, 关于这一点在上面第三章已经讲过,

因为官网的解释不能马上解决目前我们单测的现状, 所以再引入power mock,

不过大部分项目组应该都使用过power mock 

另外，有时候你觉得你的代码很难写单元测试，说明代码写的不是很好，需要去关注代码本身的逻辑，设计是否合理，

一步步去重构你的代码，让你的代码变得容易测试。因为**代码的可测试性也是一个衡量代码质量的很重要的标准!**

spock只是个工具，如果用它都无法解决你的单测case, 那我觉得应该把更多的注意力放在被测代码的设计上

当然肯定也有spock无法解决的场景, 只不过使用spock相对其他工具而言会轻松很多。

Spock不能保证让你爱上写单测, 但至少不会让你反感 ☺

<Comment/>
