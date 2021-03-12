---
date: 2021-03-12
---

# Gradle

## Overview

- Gradle is an open-source build automation tool
- Build scripts are written in Groovy or Kotlin
- Official build tool for Android
- Extensible with plugins
- Every existing Gradle projects ships with a _Gradle wrapper_, which means you don't have to install Gradle to build the project
  - `gradlew` for Linux
  - `gradlew.bat` for Windows
- You can either use Gradle as a CLI or through IDE plugins

### Core Model

- Builds are modeled as \_Directed Acyclic Graphs (DAGs) of tasks (units of work)
- Tasks are wired together based on their dependencies

![](https://docs.gradle.org/current/userguide/img/task-dag-examples.png)

- Tasks consist of

  - **Actions**: pieces of work that do something, like copy files or compile sources
  - **Inputs**: values, files and directories that actions operate on
  - **Outputs**: files and directories that actions modify or generate

- There are several build phases:

  - **Initialization**: Setup the environment
  - **Configuration**: Constructs and configures the task graph
  - **Execution**: Run selected task

- Build scripts should be _declarative_ instead of imperative
- Build scripts map to the Gradle API

### Build Environment

- There are multiple ways of configuring Gradle:
  - **Command-line flags**: Have precedence over properties and environment variables
    - Example: `--build-cache`
  - **System properties**
    - Example: `systemProp.http.proxyHost=somehost.org` stored in `gradle.properties`
  - **Gradle properties**
    - Example: `org.gradle.caching=true` stored in `gradle.properties`
  - **Environment variables**

### Gradle Daemon

- Is a long-lived process used for caching
- It waits in between builds in idle mode
- Allows Gradle to be loaded into memory only once, instead of for each build

## Simple build.gradle

```java
import org.apache.commons.codec.binary.Base64

buildscript {
  repositories {
    mavenCentral()
  }
  dependencies {
    classpath group: "commons-codec", name: "commons-codec", version: "1.2"
  }
}

task hello {
  doLast {
    println "Hello World!"
  }
}

task upper {
  dependsOn hello
  doLast {
    String str = "waynee95"
    println "Original: $str"
    println "Upper case: ${str.toUpperCase()}"
  }
}
```

## Maven vs Gradle

- See [https://gradle.org/maven-vs-gradle/](https://gradle.org/maven-vs-gradle/)

## Kotlin DSL

- See [https://docs.gradle.org/current/userguide/kotlin_dsl.html](https://docs.gradle.org/current/userguide/kotlin_dsl.html)

## Cheatsheet

### Run a task

```bash
$ gradle <taskname>
```

Use `gradle -q <taskname>` to suppress log messages.

Most builds have `clean`, `check`, `assemble` and `build` tasks.

### List all available tasks

```bash
$ gradle tasks
```

To learn more about any task run `gradle help --task <taskname>`.

### Update gradle wrapper version

```bash
$ gradle wrapper --gradle-version=6.4
```

### Run custom jar file

Add this to `build.gradle`:

```
task runJflex(type: JavaExec) {
    classpath = files("libs/jflex-full-1.8.2.jar")
    args '/path/to/flex/file'
}
```

## References

- [Gradle User Manual](https://docs.gradle.org/current/userguide/userguide.html)
- [Maven vs Gradle](https://gradle.org/maven-vs-gradle/)
- [Gradle Samples](https://docs.gradle.org/current/samples/index.html)
