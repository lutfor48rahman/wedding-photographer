import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div>
                <h2 className='que1'>Q1.Difference between authorization and authentication.</h2>
                <p>Authorization</p>
                <hr />
                <p className='que1'>1.Authorization is the process of giving permission to access the resources.	<br />
                    2.In this, it is verified that if the user is allowed through the defined policies and rules.	<br />
                    3.It is usually done once the user is successfully authenticated.	<br />
                    4.It requires the user's privilege or security level.<br />
                    5.Data is provided through the access tokens.	<br />
                    6.Example: After employees successfully authenticate themselves, they can access and work on certain functions only as per their roles and profiles.<br />
                    7.Authorization permissions cannot be changed by the user. The permissions are given to a user by the owner/manager of the system, and he can only change it.</p>

                <p>Authentication</p>
                <hr />
                <p className='que1'>1.Authentication is the process of identifying a user to provide access to a system.<br />
                    2.In this, the user or client and server are verified.<br />
                    3.It is usually performed before the authorization.<br />
                    4.It requires the login details of the user, such as user name-password, etc.<br />
                    5.Data is provided through the Token Ids.	<br />
                    6.Example: Entering Login details is necessary for the employees to authenticate themselves to access the organizational emails or software.<br />
                    7.Authentication credentials can be partially changed by the user as per the requirement.</p>
            </div>
            <div>
                <h2 className='que1'>Q2.Why are you using firebase? What other options do you have to implement authentication?</h2>
                <p className='que1'>Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.</p>

                <h4 className='que1'> Top functionalities are:</h4>

                <p className='que1'>  Firebase Database: Used to store users data like chat messages, users details and other metadata
                    Firebase Cloud Storage: Used to store user-generated content like the profile picture, multimedia messages, etc.
                    Firebase Cloud Messaging: Used to send notification
                    Firebase Remote Config: Used to perform A/B testing on the goAmazon Cognito </p>
                <h4 className='que1'>We are implement authentication:</h4>
                <p className='que1'>5 Alternative Authentication Types: <br />
                    1.Multi-factor authentication <br />
                    2.certificate-based authentication <br />
                    3.biometric authentication <br />
                    4.token-based authentication and <br />
                    5.single-sign-on solutions can improve passwords.</p>
            </div>
            <div>
                <h2 className='que1'>Q3.What other services does firebase provide other than authentication?</h2>
                <p className='que1'>Even in the case of Firebase where we use firebase authentication and the firebase database together, only a few details of user(user id, login email or number, provider details etc) are available under the Authentication tab. The rest of the details we receive after login and other custom user information we collect from the app have to be saved in the Firebase database. <br />

                    So even if you have another Web service instead of using Firebase Database, you can use Firebase Authentication. There are definitely great advantages if you use Firebase Authentication. <br />

                    1.Save time on developing Webservice methods for authentication : Instead, you can just have a method to store user information after the user authenticates with Firebase. <br />
                    2.Detailed Analytics: Also with Firebase authentication, you can also get good analytics and demographic information of users.</p>
            </div>
        </div>
    );
};

export default Blog;