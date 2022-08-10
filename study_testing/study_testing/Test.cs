using NUnit.Framework;
using OpenQA.Selenium;
using Selenium.Essentials;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;
using OpenQA.Selenium.Interactions;
using AventStack.ExtentReports;
using AventStack.ExtentReports.Reporter;
using AventStack.ExtentReports.Reporter.Configuration;
using System;
using System.Drawing.Imaging;
using System.IO;
using System.Drawing;
using System.Collections.Generic;
using System.Threading;
using automated_testing_essential;
using automated_testing_screenshot;

namespace study_testing
{
    internal class Test
    {
        ChromeDriver driver;
        ExtentReports extent = null;
        ExtentTest test;
        automated_testing_screenshot.Screenshot screen = null;

        int screenshotindex = 1;
        
        //declare strings
        string xpath_stock = "//*[@id=\"root\"]/div/div[1]/div/div[1]/div/div/div[1]/div/div";
        string xpath_stock_color = "//*[@id=\"select-kurs-colour\"]";
        //checkboxes
        string xpath_checkbox_candles = "//*[@id=\"root\"]/div/div[1]/div/div[2]/div[1]/label/span/input";
        string xpath_checkbox_avg = "//*[@id=\"root\"]/div/div[1]/div/div[2]/div[2]/label/span/input";
        string xpath_checkbox_bollinger = "//*[@id=\"root\"]/div/div[1]/div/div[2]/div[3]/label/span/input";
        string xpath_checkbox_macd = "//*[@id=\"root\"]/div/div[1]/div/div[2]/div[4]/label/span/input";
        string xpath_checkbox_rs = "//*[@id=\"root\"]/div/div[1]/div/div[2]/div[5]/label/span/input";
        //color declarations
        string xpath_avg_color = "//*[@id=\"root\"]/div/div[1]/div/div[2]/div[2]/div[1]/div";
        string xpath_bollinger_color = "//*[@id=\"root\"]/div/div[1]/div/div[2]/div[3]/div[1]/div";
        string xpath_macd_color = "//*[@id=\"root\"]/div/div[1]/div/div[2]/div[4]/div/div";
        string xpath_rs_color = "//*[@id=\"root\"]/div/div[1]/div/div[2]/div[5]/div/div";
        //extended declarations
        string xpath_avg_amount = "//*[@id=\"root\"]/div/div[1]/div/div[2]/div[2]/div[2]/div";
        string xpath_bollinger_varianz = "//*[@id=\"root\"]/div/div[1]/div/div[2]/div[3]/div[2]/div";
        //date declarations
        string xpath_date_start = "//*[@id=\":rb:\"]";
        string xpath_date_start_icon = "//*[@id=\"root\"]/div/div[2]/div/div[1]/div/div/div/button";
        string xpath_date_end = "//*[@id=\":rd:\"]";
        string xpath_date_end_icon = "//*[@id=\"root\"]/div/div[2]/div/div[2]/div/div/div/button";
        //graph
        string xpath_graph = "//*[@id=\"root\"]";


        [OneTimeSetUp]
        public void Setup()
        {
            screen = new automated_testing_screenshot.Screenshot(@"C:\Users\Innovation Hub\reports\screenshots\");
            extent = new ExtentReports();
            ExtentHtmlReporter htmlReporter = new ExtentHtmlReporter(@"C:\Users\Innovation Hub\reports\extentreport.html");
            htmlReporter.Config.Theme = Theme.Standard;
            htmlReporter.Config.DocumentTitle = "interface test result";
            htmlReporter.Config.ReportName = "test report";
            extent.AttachReporter(htmlReporter);
            ChromeOptions chromeOptions = new ChromeOptions();
            chromeOptions.AddArgument("--start-maximized");
            driver = new ChromeDriver(chromeOptions);
            Essential.ImplicitWait(3, driver);
        }

        [OneTimeTearDown]
        public void Teardown()
        {
            driver.Close();
            extent.Flush();
        }
        [Test]
        public void screenshot_test()
        {
            test = extent.CreateTest("test screenshot function").Info("this test is testing the screenshot taker");
            if (driver.Url != ("http://localhost:3000/"))
            {
                driver.Url = "http://localhost:3000/";
            }
            Essential.ImplicitWait(2, driver);
            Essential.wait(2);
            IWebElement graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]"));
            IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
            js.ExecuteScript("arguments[0].scrollIntoView();", graph);
            Essential.wait(1);
            screen.TakeScreenshot(driver, "sc", screenshotindex);
            var mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath("screenshots/sc" + (screenshotindex).ToString() + ".png").Build();
            screenshotindex++;
            test.Log(Status.Pass, "chromedriver started", mediaModel);
            Assert.Pass();
        }
        [Test]
        public void rs_macd_test()
        {
            test = extent.CreateTest("show rs").Info("this test will enable rs function and change colors");
            if (driver.Url != ("http://localhost:3000/"))
            {
                driver.Url = "http://localhost:3000/";
            }
            try
            {
                IWebElement rs_checkbox = driver.FindElement(By.XPath(xpath_checkbox_rs));
                test.Log(Status.Info, "rs checkbox found");
                rs_checkbox.Click();
                IWebElement macd_checkbox = driver.FindElement(By.XPath(xpath_checkbox_macd));
                test.Log(Status.Info, "macd checkbox found");
                macd_checkbox.Click();
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                var mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath("screenshots/sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "checkbock clickable", mediaModel);
                IWebElement rs_graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]/div/div[3]"));
                test.Log(Status.Info, "rs graph element found on page");
                IWebElement macd_graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]/div/div[2]"));
                test.Log(Status.Info, "macd graph element found on page");
                IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
                js.ExecuteScript("arguments[0].scrollIntoView();", rs_graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath("screenshots/sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "graph visible", mediaModel);

                IWebElement rs_color_box = driver.FindElement(By.XPath(xpath_rs_color));
                test.Log(Status.Info, "rs color change box detected");
                rs_color_box.Click();
                test.Log(Status.Info, "rs select button has been clicked");
                test.Log(Status.Info, "element rs_color is clickable");
                new Actions(driver).SendKeys(Keys.Down).Perform();
                System.Threading.Thread.Sleep(1000);
                new Actions(driver).SendKeys(Keys.Enter).Perform();
                System.Threading.Thread.Sleep(1000);
                rs_graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]/div/div[3]"));
                test.Log(Status.Info, "rs graph visible");
                IWebElement macd_color_box = driver.FindElement(By.XPath(xpath_macd_color));
                test.Log(Status.Info, "macd color change box detected");
                macd_color_box.Click();
                test.Log(Status.Info, "macd select button has been clicked");
                test.Log(Status.Info, "element macd_color is clickable");
                new Actions(driver).SendKeys(Keys.Down).Perform();
                System.Threading.Thread.Sleep(1000);
                new Actions(driver).SendKeys(Keys.Enter).Perform();
                System.Threading.Thread.Sleep(1000);
                macd_graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]/div/div[2]"));
                test.Log(Status.Info, "macd graph visible");
                rs_graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]/div/div[3]"));
                js.ExecuteScript("arguments[0].scrollIntoView();", rs_graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "colors have been changed", mediaModel);
                rs_checkbox.Click();
                macd_checkbox.Click();
            }
            catch (Exception ex)
            {
                test.Fail(ex.Message);
                Assert.Fail(ex.Message);
            }
            Assert.Pass();
        }
        [Test]
        public void rs_test()
        {
            test = extent.CreateTest("show rs").Info("this test will enable rs function and change colors");
            if (driver.Url != ("http://localhost:3000/"))
            {
                driver.Url = "http://localhost:3000/";
            }
            try
            {
                IWebElement rs_checkbox = driver.FindElement(By.XPath(xpath_checkbox_rs));
                test.Log(Status.Info, "checkbox found");
                rs_checkbox.Click();
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                var mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath("screenshots/sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "checkbock clickable", mediaModel);
                IWebElement rs_graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]/div/div[3]"));
                test.Log(Status.Info, "graph element found on page");
                IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
                js.ExecuteScript("arguments[0].scrollIntoView();", rs_graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath("screenshots/sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "graph visible", mediaModel);

                IWebElement rs_color_box = driver.FindElement(By.XPath(xpath_rs_color));
                test.Log(Status.Info, "color change box detected");
                rs_color_box.Click();
                test.Log(Status.Info, "select button has been clicked");
                test.Log(Status.Info, "element rc_color is clickable");
                new Actions(driver).SendKeys(Keys.Down).Perform();
                System.Threading.Thread.Sleep(1000);
                new Actions(driver).SendKeys(Keys.Enter).Perform();
                System.Threading.Thread.Sleep(1000);
                rs_graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]/div/div[3]"));
                test.Log(Status.Info, "graph visible");
                js.ExecuteScript("arguments[0].scrollIntoView();", rs_graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "color has been changed", mediaModel);
                rs_checkbox.Click();
            }
            catch (Exception ex)
            {
                test.Fail(ex.Message);
                Assert.Fail(ex.Message);
            }
            Assert.Pass();
        }
        [Test]
        public void macd_test()
        {
            test = extent.CreateTest("show macd").Info("this test will enable macd function and change colors");
            if (driver.Url != ("http://localhost:3000/"))
            {
                driver.Url = "http://localhost:3000/";
            }
            try
            {
                IWebElement macd_checkbox = driver.FindElement(By.XPath(xpath_checkbox_macd));
                test.Log(Status.Info, "checkbox found");
                macd_checkbox.Click();
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                var mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath("screenshots/sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "checkbock clickable", mediaModel);
                IWebElement macd_graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]/div/div[2]"));
                test.Log(Status.Info, "graph element found on page");
                IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
                js.ExecuteScript("arguments[0].scrollIntoView();", macd_graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath("screenshots/sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "graph visible", mediaModel);

                IWebElement macd_color_box = driver.FindElement(By.XPath(xpath_macd_color));
                test.Log(Status.Info, "color change box detected");
                macd_color_box.Click();
                test.Log(Status.Info, "select button has been clicked");
                test.Log(Status.Info, "element macd_color is clickable");
                new Actions(driver).SendKeys(Keys.Down).Perform();
                System.Threading.Thread.Sleep(1000);
                new Actions(driver).SendKeys(Keys.Enter).Perform();
                System.Threading.Thread.Sleep(1000);
                macd_graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]/div/div[2]"));
                test.Log(Status.Info, "graph visible");
                js.ExecuteScript("arguments[0].scrollIntoView();", macd_graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "color has been changed", mediaModel);
                macd_checkbox.Click();
            }
            catch(Exception ex)
            {
                test.Fail(ex.Message);
                Assert.Fail(ex.Message);
            }
            Assert.Pass();

        }
        [Test]
        public void average_test()
        {
            test = extent.CreateTest("show average").Info("this test will enable averages and change colors");
            if (driver.Url != ("http://localhost:3000/"))
            {
                driver.Url = "http://localhost:3000/";
            }
            try
            {
                IWebElement average_checkbox = driver.FindElement(By.XPath(xpath_checkbox_avg));
                test.Log(Status.Info, "checkbox found");
                average_checkbox.Click();
                test.Log(Status.Info, "checkbox clicked");
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                var mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "average line in graph activated", mediaModel);

                IWebElement average_color_box = driver.FindElement(By.XPath(xpath_avg_color));
                test.Log(Status.Info, "color change box detected");
                average_color_box.Click();
                test.Log(Status.Info, "select button has been clicked");
                test.Log(Status.Info, "element stock_color is clickable");
                new Actions(driver).SendKeys(Keys.Down).Perform();
                System.Threading.Thread.Sleep(1000);
                new Actions(driver).SendKeys(Keys.Enter).Perform();
                System.Threading.Thread.Sleep(1000);
                IWebElement graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]"));
                IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
                js.ExecuteScript("arguments[0].scrollIntoView();", graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "color has been changed", mediaModel);

                IWebElement average_amount = driver.FindElement(By.XPath(xpath_avg_amount));
                test.Log(Status.Info, "element average amount detected");
                average_amount.Click();
                test.Log(Status.Info, "element average clickable");
                new Actions(driver).SendKeys(Keys.Up).Perform();
                System.Threading.Thread.Sleep(1000);
                new Actions(driver).SendKeys(Keys.Enter).Perform();
                System.Threading.Thread.Sleep(1000);
                graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]"));
                js.ExecuteScript("arguments[0].scrollIntoView();", graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Info, "average reduced");
                test.Log(Status.Pass, "averages tested", mediaModel);
                average_checkbox.Click();
            }
            catch(Exception ex)
            {
                test.Fail(ex.Message);
                Assert.Fail(ex.Message);
            }
            Assert.Pass();
        }
        [Test]
        public void bollinger_test()
        {
            test = extent.CreateTest("show bollinger").Info("this test will enable bollinger bands and change colors");
            if (driver.Url != ("http://localhost:3000/"))
            {
                driver.Url = "http://localhost:3000/";
            }
            try
            {
                IWebElement bollinger_checkbox = driver.FindElement(By.XPath(xpath_checkbox_bollinger));
                test.Log(Status.Info, "checkbox found");
                bollinger_checkbox.Click();
                test.Log(Status.Info, "checkbox clicked");
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                var mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "bollinger bands in graph activated", mediaModel);

                IWebElement bollinger_color_box = driver.FindElement(By.XPath(xpath_bollinger_color));
                test.Log(Status.Info, "color change box detected");
                bollinger_color_box.Click();
                test.Log(Status.Info, "select button has been clicked");
                test.Log(Status.Info, "element stock_color is clickable");
                new Actions(driver).SendKeys(Keys.Up).Perform();
                System.Threading.Thread.Sleep(1000);
                new Actions(driver).SendKeys(Keys.Enter).Perform();
                System.Threading.Thread.Sleep(2000);
                IWebElement graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]"));
                IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
                js.ExecuteScript("arguments[0].scrollIntoView();", graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "color has been changed", mediaModel);

                IWebElement bollinger_var = driver.FindElement(By.XPath(xpath_bollinger_varianz));
                test.Log(Status.Info, "element bollinger-var detected");
                bollinger_var.Click();
                test.Log(Status.Info, "bollinger-var clickable");
                new Actions(driver).SendKeys(Keys.Up).Perform();
                System.Threading.Thread.Sleep(1000);
                new Actions(driver).SendKeys(Keys.Enter).Perform();
                System.Threading.Thread.Sleep(5000);
                test.Log(Status.Info, "bollinger var reduced");
                graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]"));
                js.ExecuteScript("arguments[0].scrollIntoView();", graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Pass, "bollinger bands tested", mediaModel);
                bollinger_checkbox.Click();
            }
            catch(Exception ex)
            {
                test.Fail(ex.Message);
                Assert.Fail(ex.Message);
            }
            Assert.Pass();
        }
        [Test]
        public void stock_colorchange_test()
        {
            test = extent.CreateTest("change stockcolor").Info("this test will be testing to change the color of the stock");
            if (driver.Url != ("http://localhost:3000/"))
            {
                driver.Url = "http://localhost:3000/";
            }
            try
            {
                IWebElement elem = driver.FindElement(By.XPath(xpath_stock_color));
                test.Log(Status.Info, "element stock_color has been detected");
                IWebElement graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]"));
                IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
                js.ExecuteScript("arguments[0].scrollIntoView();", graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                var mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Info, "current color", mediaModel);
                elem.Click();
                System.Threading.Thread.Sleep(1000);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Info, "element stock_color is clickable", mediaModel);
                new Actions(driver).SendKeys(Keys.Down).Perform();
                System.Threading.Thread.Sleep(1000);
                new Actions(driver).SendKeys(Keys.Enter).Perform();
                System.Threading.Thread.Sleep(1000);
                graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]"));
                js.ExecuteScript("arguments[0].scrollIntoView();", graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Info, "new color has been selected", mediaModel);
                test.Pass("test has been passed");
            }
            catch (Exception ex)
            {
                test.Fail(ex.Message);
                Assert.Fail(ex.Message);
            }
            Assert.Pass();
        }

        [Test]
        public void checkbox_test_deactivation()
        {
            test = extent.CreateTest("checkboxes deactivation").Info("this test will be testing the functionality of the checkboxes");
            if (driver.Url != ("http://localhost:3000/"))
            {
                driver.Url = "http://localhost:3000/";
            }
            IList<IWebElement> list = driver.FindElements(By.XPath("//input"));
            int button_counter = 0;
            foreach (IWebElement elem in list)
            {
                try
                {
                    if (elem.GetAttribute("type") == "checkbox")
                    {
                        test.Log(Status.Info, "checkbox in list detected");
                        elem.Click();
                        button_counter++;
                        //Essential.wait(1);
                        continue;
                    }
                    else
                    {

                    }
                }
                catch (Exception ex)
                {
                    continue;
                }
            }
            if (button_counter < 5)
            {
                test.Fail("missing checkboxes");
                Assert.Fail("not all checkboxes detected");
            }
            else
            {
                IWebElement graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]"));
                IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
                js.ExecuteScript("arguments[0].scrollIntoView();", graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                var mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Pass("test passed", mediaModel);
                Assert.Pass();
            }
        }

        [Test]
        public void checkbox_test_activation()
        {
            test = extent.CreateTest("checkboxes activation").Info("this test will be testing the functionality of the checkboxes");
            if (driver.Url != ("http://localhost:3000/"))
            {
                driver.Url = "http://localhost:3000/";
            }
            IList<IWebElement> list = driver.FindElements(By.XPath("//input"));
            int button_counter = 0;
            foreach(IWebElement elem in list)
            {
                try
                {
                    if(elem.GetAttribute("type") == "checkbox")
                    {
                        test.Log(Status.Info, "checkbox in list detected");
                        elem.Click();
                        button_counter++;
                        //Essential.wait(1);
                        continue;
                    }
                    else
                    {
                        
                    }
                }
                catch (Exception ex)
                {
                    continue;
                }
            }
            if(button_counter < 5)
            {
                test.Fail("missing checkboxes");
                Assert.Fail("not all checkboxes detected");
            }
            else
            {
                IWebElement graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]"));
                IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
                js.ExecuteScript("arguments[0].scrollIntoView();", graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                var mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Pass("test passed", mediaModel);
                Assert.Pass();
            }
        }

        [Test]
        public void stockchange_test()
        {
            test = extent.CreateTest("change stock").Info("this test will be testing the change dropdown of the stocks");
            if (driver.Url != ("http://localhost:3000/"))
            {
                driver.Url = "http://localhost:3000/";
            }
            try
            {
                IWebElement elem = driver.FindElement(By.XPath(xpath_stock));
                test.Log(Status.Info, "element stock has been found");
                elem.Click();
                Essential.ImplicitWait(2, driver);
                Essential.wait(1);
                IWebElement graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]"));
                IJavaScriptExecutor js = (IJavaScriptExecutor)driver;
                js.ExecuteScript("arguments[0].scrollIntoView();", graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                var mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Info, "element stock is clickable", mediaModel);
                new Actions(driver).SendKeys(Keys.Down).Perform();
                Essential.wait(1);
                new Actions(driver).SendKeys(Keys.Enter).Perform();
                Essential.wait(1);
                graph = driver.FindElement(By.XPath("//*[@id=\"chartArea\"]"));
                js.ExecuteScript("arguments[0].scrollIntoView();", graph);
                Essential.wait(1);
                screen.TakeScreenshot(driver, "sc", screenshotindex);
                mediaModel = MediaEntityBuilder.CreateScreenCaptureFromPath(screen.GetPath() + "sc" + (screenshotindex).ToString() + ".png").Build();
                screenshotindex++;
                test.Log(Status.Info, "element select sucessfully", mediaModel);
                test.Pass("test has been passed");
            }
            catch (Exception ex)
            {
                test.Fail(ex.Message);
                Assert.Fail(ex.Message);
            }
            Assert.Pass();
        }

        [Test]
        public void url_test()
        {

            test = extent.CreateTest("open localhost").Info("this test will be testing if the chromedriver can open the localhost");
            driver.Url = ("http://localhost:3000/");
            IList<IWebElement> urlelements = new List<IWebElement>();
            urlelements = driver.FindElements(By.TagName("Die Website ist nicht erreichbar"));
            if (urlelements.Count < 1 || urlelements == null)
            {
                test.Log(Status.Pass, "website has been opened successfully");
                System.Threading.Thread.Sleep(1000);
                Assert.Pass();
            }
            else
            {
                test.Log(Status.Fail, "error loading the url");
                Assert.Fail();
            }
        }
    }
}
